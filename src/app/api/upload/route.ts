import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import sharp from 'sharp';

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const file = form.get('file') as File | null;
    const productId = (form.get('productId') as string | null) ?? 'product';

    if (!file || !file.size) {
      return NextResponse.json({ error: 'No file' }, { status: 400 });
    }

    const ext = file.name.split('.').pop()?.toLowerCase() ?? 'jpg';
    const allowed = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'avif'];
    if (!allowed.includes(ext)) {
      return NextResponse.json({ error: 'Invalid file type' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buf = Buffer.from(bytes);

    const outDir = join(process.cwd(), 'public', 'images', 'products');
    await mkdir(outDir, { recursive: true });

    // Convert to WebP with sharp for optimal size
    const filename = `${productId}.webp`;
    const outPath = join(outDir, filename);

    await sharp(buf)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(outPath);

    return NextResponse.json({ path: `/images/products/${filename}` });
  } catch (err) {
    console.error('Upload error:', err);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
