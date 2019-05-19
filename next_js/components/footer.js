import Link from 'next/link';

const footerStyle = {
        position: 'fixed',
        width: '100%',
        marginLeft: '-10px',
        bottom: '0px',
        padding: 10,
        border: '1px solid #DDD',
        textAlign: 'center',
}

const Footer = () => (
        <div style={footerStyle}>
            <p>Copyright</p>
        </div>
)

export default Footer;
