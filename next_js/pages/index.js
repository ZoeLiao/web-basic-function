import Link from 'next/link';
import Layout from '../components/Layout';

const PostLink = (props) => (
    <li>
        <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

export default () => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            <PostLink id="about-nextjs" title="About next.js" />
            <PostLink id="setup-nextjs" title="Setup next.js" />
            <PostLink id="first-website" title="Create your first website by next.js & react" />
        </ul>
    </Layout>
);
