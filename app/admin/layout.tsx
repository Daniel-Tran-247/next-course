import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const AdminLayout: (prop: Props) => void = ({children}: Props) => {
    return (
        <div className="flex">
            <aside className="bg-slate-200 p-5 mr-4">Admin Sidebar</aside>
            <main>{children}</main>
        </div>
    )
}

export default AdminLayout;