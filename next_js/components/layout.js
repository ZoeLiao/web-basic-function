import Header from './Header';
import Footer from './Footer';

const layoutStyle = {
        margin: 20,
        padding: 20,
        border: '1px solid #DDD',
        textAlign: 'center'
}

const Layout = (props) => (
        <div>
            <Header />
        <div style={layoutStyle}>
            {props.children}
        </div>
        <div>
            <Footer />
        </div>
        </div>
)

export default Layout
