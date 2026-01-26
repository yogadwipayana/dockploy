import { Helmet } from 'react-helmet-async'
import { useState, useMemo, useEffect } from 'react'

/**
 * Contoh halaman dengan dynamic title berdasarkan state
 * Ini menunjukkan bagaimana title bisa berubah sesuai dengan data/state
 */
export default function DashboardExample() {
    const [activeTab, setActiveTab] = useState('overview')
    
    // Title berubah sesuai tab yang aktif - menggunakan useMemo untuk optimasi
    const pageTitle = useMemo(() => {
        const titles = {
            overview: 'Dashboard Overview',
            containers: 'Containers',
            images: 'Images',
            networks: 'Networks'
        }
        return `${titles[activeTab]} - Dockploy`
    }, [activeTab])

    // Fallback: Update document.title secara manual jika Helmet tidak bekerja
    useEffect(() => {
        document.title = pageTitle
    }, [pageTitle])

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={`Manage your Docker ${activeTab}`} />
            </Helmet>
            
            <div style={{ padding: '20px' }}>
                <h1>Dashboard</h1>
                
                {/* Visual indicator untuk current title */}
                <div style={{ 
                    marginBottom: '20px', 
                    padding: '10px 15px', 
                    backgroundColor: '#e7f3ff', 
                    borderLeft: '4px solid #007bff',
                    borderRadius: '4px'
                }}>
                    <strong>Current Page Title:</strong> <code>{pageTitle}</code>
                </div>
                
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                    <button 
                        onClick={() => setActiveTab('overview')}
                        style={{ 
                            padding: '10px 20px',
                            backgroundColor: activeTab === 'overview' ? '#007bff' : '#e0e0e0',
                            color: activeTab === 'overview' ? 'white' : 'black',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        Overview
                    </button>
                    <button 
                        onClick={() => setActiveTab('containers')}
                        style={{ 
                            padding: '10px 20px',
                            backgroundColor: activeTab === 'containers' ? '#007bff' : '#e0e0e0',
                            color: activeTab === 'containers' ? 'white' : 'black',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        Containers
                    </button>
                    <button 
                        onClick={() => setActiveTab('images')}
                        style={{ 
                            padding: '10px 20px',
                            backgroundColor: activeTab === 'images' ? '#007bff' : '#e0e0e0',
                            color: activeTab === 'images' ? 'white' : 'black',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        Images
                    </button>
                    <button 
                        onClick={() => setActiveTab('networks')}
                        style={{ 
                            padding: '10px 20px',
                            backgroundColor: activeTab === 'networks' ? '#007bff' : '#e0e0e0',
                            color: activeTab === 'networks' ? 'white' : 'black',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                    >
                        Networks
                    </button>
                </div>

                <div style={{ 
                    padding: '20px', 
                    backgroundColor: '#f5f5f5', 
                    borderRadius: '8px' 
                }}>
                    <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
                    <p>
                        Konten untuk tab {activeTab}. 
                        Perhatikan title di browser tab berubah saat Anda klik tab berbeda!
                    </p>
                </div>

                <div style={{ 
                    marginTop: '20px', 
                    padding: '15px', 
                    backgroundColor: '#fff3cd', 
                    borderRadius: '5px',
                    border: '1px solid #ffc107'
                }}>
                    <strong>💡 Tips:</strong> Buka browser DevTools dan lihat element <code>&lt;title&gt;</code> 
                    di dalam <code>&lt;head&gt;</code> berubah secara real-time saat Anda klik tab!
                </div>
            </div>
        </>
    )
}
