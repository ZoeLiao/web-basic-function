import { withRouter } from 'next/router';
import Layout from '../components/Layout';

// withRouter: take the router of next as a prop to inject into compoent 
const Post = withRouter((props) => (
        <Layout>
            <h1>{props.router.query.title}</h1>
            <p>Write your post here.</p>
        </Layout>
));

export default Post;
