import React from "react"


interface IProductDiscussion {
    id: number
}

const ProductDiscussion: React.FC<{ productDiscussion: IProductDiscussion }> = ({ productDiscussion }) => {
    return (
        <div>{productDiscussion.id}</div>
    )
}

const Discussions = () => {
    const discussions: IProductDiscussion[] = []
    return (
        <div>
            Discussions
            {discussions.map((productDiscussion) => (
                <ProductDiscussion productDiscussion={productDiscussion} />
            ))}
        </div>
    )
}

export default Discussions