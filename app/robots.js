export default function robots(){
    return{
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin','/privacy']
            }
        ],
        sitemap: 'https://www.zemy-group.com/sitemap.xml'
    }
}