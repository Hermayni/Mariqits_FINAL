import { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { useAdmin } from '../../context/AdminContext';

export default function AdminUsersPage() {
  const { adminUsers, deleteUser } = useAdmin();
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredUsers = adminUsers.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const customers = adminUsers.filter(u => u.role === 'Customer').length;
  const administrators = adminUsers.filter(u => u.role === 'Administrator').length;
  
  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete user "${name}"?`)) {
      deleteUser(id);
    }
  };
  
  const getRoleColor = (role: string) => {
    return role === 'Administrator' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800';
  };
  
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };
  
  return (
    <AdminLayout>
      <div className="p-[32px]">
        <div className="mb-[32px]">
          <h1 className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[32px] text-[#2d2d2d] mb-[4px]">Users</h1>
          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#4a5565]">Manage user accounts and permissions</p>
        </div>
        
        <div className="bg-white rounded-[16px] border-[1px] border-[rgba(0,0,0,0.05)]">
          <div className="p-[24px] border-b border-gray-100">
            <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[12px] text-[#4a5565] block mb-[8px]">Search Users</label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or email..."
              className="w-full h-[44px] rounded-[12px] border-[1px] border-[rgba(0,0,0,0.1)] px-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors"
            />
          </div>
          
          <div className="grid grid-cols-3 gap-[24px] p-[24px] border-b border-gray-100">
            <div className="text-center p-[20px] bg-gray-50 rounded-[12px]">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[12px] text-[#4a5565] mb-[4px] uppercase">Total Users</p>
              <p className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[28px] text-[#2d2d2d]">{adminUsers.length}</p>
            </div>
            <div className="text-center p-[20px] bg-gray-50 rounded-[12px]">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[12px] text-[#4a5565] mb-[4px] uppercase">Customers</p>
              <p className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[28px] text-[#2d2d2d]">{customers}</p>
            </div>
            <div className="text-center p-[20px] bg-gray-50 rounded-[12px]">
              <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[12px] text-[#4a5565] mb-[4px] uppercase">Administrators</p>
              <p className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[28px] text-[#2d2d2d]">{administrators}</p>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#4a5565] text-left py-[12px] px-[24px] uppercase">User</th>
                  <th className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#4a5565] text-left py-[12px] px-[16px] uppercase">Contact</th>
                  <th className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#4a5565] text-center py-[12px] px-[16px] uppercase">Role</th>
                  <th className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#4a5565] text-left py-[12px] px-[16px] uppercase">Joined</th>
                  <th className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#4a5565] text-center py-[12px] px-[24px] uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map(user => (
                  <tr key={user.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="py-[16px] px-[24px]">
                      <div className="flex items-center gap-[12px]">
                        <div className={`size-[40px] rounded-full flex items-center justify-center font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[14px] text-white ${user.role === 'Administrator' ? 'bg-purple-500' : 'bg-blue-500'}`}>
                          {getInitials(user.name)}
                        </div>
                        <div>
                          <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d2d2d]">{user.name}</p>
                          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px] text-[#4a5565]">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-[16px] px-[16px]">
                      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565] mb-[2px]">{user.email}</p>
                      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px] text-[#4a5565]">{user.phone}</p>
                    </td>
                    <td className="py-[16px] px-[16px]">
                      <div className="flex justify-center">
                        <span className={`inline-block px-[12px] py-[6px] rounded-[26843500px] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] ${getRoleColor(user.role)}`}>
                          {user.role}
                        </span>
                      </div>
                    </td>
                    <td className="py-[16px] px-[16px]">
                      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">{user.joined}</p>
                    </td>
                    <td className="py-[16px] px-[24px]">
                      <div className="flex items-center justify-center gap-[8px]">
                        <button
                          onClick={() => alert(`Reset password for ${user.name} (Demo)`)}
                          className="text-blue-600 hover:text-blue-700 transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px]"
                        >
                          Reset Password
                        </button>
                        <button
                          onClick={() => handleDelete(user.id, user.name)}
                          className="text-red-600 hover:text-red-700 transition-colors"
                          title="Delete"
                        >
                          <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                            <path d="M2.5 5h15M6.667 5V3.333C6.667 2.597 7.264 2 8 2h4c.736 0 1.333.597 1.333 1.333V5m2 0v11.667c0 .736-.597 1.333-1.333 1.333H6c-.736 0-1.333-.597-1.333-1.333V5h10z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
