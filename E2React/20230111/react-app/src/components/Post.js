import Blog from "./Blog";

const Post = () => {
    // let i = 0;
    const html = Blog.map(x =>
        <div className='box' key={x._id}>
            <img src={x.image} alt='pict' />
            <p >{x.date} / {x.comments} COMMENTS</p>
            <h3 className='txt'>{x.title}</h3>
            <p className='txt'>{x.content}</p>
            <p><a className="App-lin" href={x.link}>Nuoroda</a> </p>
        </div>
    );

    return <main>{html}</main>;
}

export default Post;

