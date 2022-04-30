import {useRoutes} form 'react-router-dom';
import {} from

const Routes = () => {
    let element = useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/contact',
            element: <Contact />
        },
        {
            path: '/blog',
            element: <Blog />
        },
        {
            path: '/blog/:id',
            element: <BlogPost />
        },
        {
            path: '/blog/:id/edit',
            element: <BlogPostEdit />
        },
        {
            path: '/blog/new',
            element: <BlogPostNew />
        },
        {
            path: '/admin',
            element: <Admin />
        },
        {
            path: '/admin/posts',
            element: <AdminPosts />
        },
        {
            path: '/admin/posts/:id',
            element: <AdminPost />
        },
        {
            path: '/admin/posts/:id/edit',
            element: <AdminPostEdit />
        },
        {
            path: '/admin/posts/new',
            element: <AdminPostNew />
        },
        {
            path: '/admin/users',
            element: <AdminUsers />
        },
        {
            path: '/admin/users/:id',
            element: <AdminUser />
        },
        {
            path: '/admin/users/:id/edit',
            element: <AdminUserEdit />
        },
        {
            path: '/admin/users/new',
            element: <AdminUserNew />
        },
        {
            path: '/admin/settings',
            element: <AdminSettings />
        },
        {
            path: '/admin/settings/edit',
            element: <AdminSettingsEdit />
        },
        {
            path: '/admin/settings/new',
            element: <AdminSettingsNew />
        },
        {
            path: '/admin/settings/:id',
            element: <AdminSetting />
        },
        {
            path: '/admin/settings/:id/edit',
        }
    ])
    return element;
}