import { Dictionary } from '@/i18n/dictionaries';
import { CategorySlug, categoryDefs } from '@/data/products';

export function categoryName(slug: CategorySlug, t: Dictionary): string {
  switch (slug) {
    case 'insektitsidlar':    return t.cat_insektitsidlar;
    case 'fungitsidlar':      return t.cat_fungitsidlar;
    case 'herbitsidlar':      return t.cat_herbitsidlar;
    case 'ogitlar':           return t.cat_ogitlar;
    case 'biostimulyatorlar': return t.cat_biostimulyatorlar;
    case 'defoliantlar':      return t.cat_defoliantlar;
  }
}

export function categoryDesc(slug: CategorySlug, t: Dictionary): string {
  switch (slug) {
    case 'insektitsidlar':    return t.cat_insektitsidlar_desc;
    case 'fungitsidlar':      return t.cat_fungitsidlar_desc;
    case 'herbitsidlar':      return t.cat_herbitsidlar_desc;
    case 'ogitlar':           return t.cat_ogitlar_desc;
    case 'biostimulyatorlar': return t.cat_biostimulyatorlar_desc;
    case 'defoliantlar':      return t.cat_defoliantlar_desc;
  }
}

export { categoryDefs };
