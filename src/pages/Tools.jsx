import { Helmet } from 'react-helmet-async'
import { useState, useMemo, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { AppSidebar } from '@/components/app-sidebar'
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar'

export default function Tools() {
    return (
        <>
            <Helmet>
                <title>Tools - Dockploy</title>
            </Helmet>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <main className="p-6">
                        <h1 className="text-2xl font-bold">Tools</h1>
                        <p className="text-muted-foreground mt-2">
                            Welcome to the tools page
                        </p>
                    </main>
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}
