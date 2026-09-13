import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_PHONE_NUMBER: process.env.phone_number || process.env.NEXT_PUBLIC_PHONE_NUMBER,
    phone_number: process.env.phone_number || process.env.NEXT_PUBLIC_PHONE_NUMBER,
  },
};

export default nextConfig;
