import {Helmet} from "react-helmet";

const SiteTitle = ({title}) => {
    return (
        <Helmet><title>{title}</title></Helmet>
    );
};

export default SiteTitle;