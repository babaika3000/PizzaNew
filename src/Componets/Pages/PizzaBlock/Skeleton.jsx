import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader  className="pizza-block"
        speed={2}
        width={289}
        height={492}
        viewBox="0 0 289 492"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="82" cy="75" r="74" />
        <rect x="-22" y="149" rx="0" ry="0" width="190" height="57" />
        <rect x="4" y="221" rx="0" ry="0" width="166" height="55" />
        <rect x="4" y="301" rx="0" ry="0" width="57" height="24" />
        <rect x="87" y="296" rx="0" ry="0" width="83" height="30" />
    </ContentLoader>
)

export default Skeleton