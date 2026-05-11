'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiSearch, FiX, FiSliders } from 'react-icons/fi';
import ProductCard from '@/components/ProductCard';
import { categoryDefs, CategorySlug } from '@/data/products';
import { useT } from '@/store/languageStore';
import { useProductStore } from '@/store/productStore';
import { categoryName } from '@/lib/categories';

type SortKey = 'default' | 'nameAsc' | 'newest';

function ProductsContent() {
  const t = useT();
  const params = useSearchParams();
  const initialCat = params.get('category') as CategorySlug | null;

  const products = useProductStore((s) => s.products);
  const [category, setCategory] = useState<CategorySlug | null>(initialCat);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<SortKey>('default');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    setCategory(initialCat);
  }, [initialCat]);

  const filtered = useMemo(() => {
    let list = products;
    if (category) list = list.filter((p) => p.categorySlug === category);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.activeIngredient ?? '').toLowerCase().includes(q) ||
          p.categorySlug.toLowerCase().includes(q),
      );
    }
    const sorted = [...list];
    switch (sort) {
      case 'nameAsc':   sorted.sort((a, b) => a.name.localeCompare(b.name)); break;
      case 'newest':    sorted.sort((a, b) => b.createdAt - a.createdAt); break;
      default: {
        sorted.sort((a, b) => Number(b.featured) - Number(a.featured));
      }
    }
    return sorted;
  }, [products, category, query, sort]);

  const clearFilters = () => {
    setCategory(null);
    setQuery('');
    setSort('default');
  };

  return (
    <div className="pt-40 md:pt-44 pb-16">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <span className="eyebrow mb-4">{t.nav_products}</span>
          <h1 className="section-title text-left">{t.products_pageTitle}</h1>
          <p className="text-base max-w-xl" style={{ color: 'var(--ink-500)' }}>
            {t.products_pageSubtitle}
          </p>
        </motion.div>

        {/* Toolbar */}
        <div
          className="card-flat p-4 md:p-5 mb-6 sticky top-[68px] z-30"
          style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)' }}
        >
          <div className="flex flex-col md:flex-row gap-3 md:items-center">
            <div className="relative flex-1">
              <FiSearch
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4"
                style={{ color: 'var(--ink-400)' }}
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.common_searchPlaceholder}
                style={{ paddingLeft: '2.5rem' }}
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center hover:bg-black/5"
                  aria-label="Clear"
                >
                  <FiX className="w-4 h-4" style={{ color: 'var(--ink-500)' }} />
                </button>
              )}
            </div>

            <div className="flex items-center gap-3">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="hidden md:block"
                style={{ width: 'auto', paddingTop: 12, paddingBottom: 12, paddingRight: 32 }}
              >
                <option value="default">{t.products_sort_default}</option>
                <option value="nameAsc">{t.products_sort_nameAsc}</option>
                <option value="newest">{t.products_sort_newest}</option>
              </select>

              <button
                onClick={() => setShowMobileFilters((v) => !v)}
                className="btn btn-ghost btn-sm md:hidden"
              >
                <FiSliders className="w-4 h-4" />
                {t.products_filter_category}
              </button>
            </div>
          </div>

          {/* Category pills (desktop) */}
          <div className="hidden md:flex flex-wrap gap-2 mt-4">
            <button
              onClick={() => setCategory(null)}
              className={`pill ${!category ? 'active' : ''}`}
            >
              {t.categories_all}
            </button>
            {categoryDefs.map((c) => (
              <button
                key={c.slug}
                onClick={() => setCategory(c.slug)}
                className={`pill ${category === c.slug ? 'active' : ''}`}
              >
                <span>{c.emoji}</span>
                {categoryName(c.slug, t)}
              </button>
            ))}
          </div>

          {/* Mobile filters dropdown */}
          {showMobileFilters && (
            <div className="md:hidden mt-4 space-y-3">
              <div>
                <label className="field-label">{t.products_filter_category}</label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setCategory(null)}
                    className={`pill ${!category ? 'active' : ''}`}
                  >
                    {t.categories_all}
                  </button>
                  {categoryDefs.map((c) => (
                    <button
                      key={c.slug}
                      onClick={() => setCategory(c.slug)}
                      className={`pill ${category === c.slug ? 'active' : ''}`}
                    >
                      {categoryName(c.slug, t)}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="field-label">{t.products_filter_sort}</label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                >
                  <option value="default">{t.products_sort_default}</option>
                  <option value="nameAsc">{t.products_sort_nameAsc}</option>
                  <option value="newest">{t.products_sort_newest}</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Result meta */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
          <p className="text-sm" style={{ color: 'var(--ink-500)' }}>
            {t.products_resultsLabel(filtered.length)}
          </p>
          {(category || query || sort !== 'default') && (
            <button
              onClick={clearFilters}
              className="text-sm font-semibold inline-flex items-center gap-1.5 hover:underline"
              style={{ color: 'var(--green-700)' }}
            >
              <FiX className="w-4 h-4" />
              {t.products_clearFilters}
            </button>
          )}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 card p-10">
            <div
              className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4"
              style={{ background: 'var(--green-50)' }}
            >
              <FiSearch className="w-6 h-6" style={{ color: 'var(--green-700)' }} />
            </div>
            <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--ink-900)' }}>
              {t.products_empty_title}
            </h3>
            <p className="text-sm mb-5" style={{ color: 'var(--ink-500)' }}>
              {t.products_empty_text}
            </p>
            <button onClick={clearFilters} className="btn btn-primary btn-sm">
              {t.products_clearFilters}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="pt-40 text-center">
        <div className="loader mx-auto" />
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}
