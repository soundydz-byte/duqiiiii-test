/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
    domains: ['nbdytzfnzccwshagzpeu.supabase.co'],
  },
}

export default nextConfig
