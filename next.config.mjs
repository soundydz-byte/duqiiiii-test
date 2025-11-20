/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
    domains: ['nbdytzfnzccwshagzpeu.supabase.co'],
  },
  outputFileTracingRoot: process.cwd(),
}

export default nextConfig
