"use client"

import { Button } from "@/components/ui/button"
import { RequireAuth } from "@/components/auth/require-auth"
import { useAuth } from "@/contexts/auth-provider"

export default function DashboardPage() {
  const { user, signOut } = useAuth()

  return (
    <RequireAuth>
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Button onClick={signOut}>Đăng xuất</Button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Thông tin người dùng</h2>
          <div className="space-y-2">
            <p><span className="font-medium">Email:</span> {user?.email}</p>
            <p><span className="font-medium">ID:</span> {user?.id}</p>
            <p><span className="font-medium">Đã xác nhận email:</span> {user?.email_confirmed_at ? 'Có' : 'Chưa'}</p>
          </div>
        </div>
      </div>
    </RequireAuth>
  )
}