import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import { useRouter } from 'next/router';

export default function Post({ postData }) {
    const router = useRouter();
    const { id } = router.query;
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <p>This is the post with route - <strong>{id}</strong> - taken from useRouter</p>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}

// export async function getStaticPaths() {
//     return {
//         paths: [
//             { params: { id: 'ssg-ssr' } },
//             { params: { id: 'pre-rendering' } }
//         ],
//         fallback: false
//     }
// }

// This function gets called at build time and returns an array of possible values for id
export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}