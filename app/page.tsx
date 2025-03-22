"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-provider"

export default function HomePage() {
  const router = useRouter()
  const { user, loading } = useAuth()

  if (loading) {
    return <div className="flex h-screen items-center justify-center">Đang tải...</div>
  }

  if (user) {
    router.push("/dashboard")
    return null
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="text-center space-y-6 max-w-2xl">
        <h1 className="text-4xl font-bold">Chào mừng đến với ứng dụng NextJS + Supabase</h1>
        <p className="text-lg text-gray-600">
          Một ứng dụng mẫu sử dụng NextJS, Supabase và shadcn/ui
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" onClick={() => router.push("/login")}>
            Đăng nhập
          </Button>
          <Button size="lg" variant="outline" onClick={() => router.push("/register")}>
            Đăng ký
          </Button>
        </div>
      </div>
    </div>
  )
}