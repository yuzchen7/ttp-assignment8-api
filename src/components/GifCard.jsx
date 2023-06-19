const GifCard = (props) => {
    const datas = props.data;

    return (
        <ul class="ul-container">
            {
                datas.map(function(data) {
                    return (
                        <div key={data.id}>
                            <li>{data.title}</li>
                            <img src={data.images.preview_gif.url} width="150" />
                        </div>
                    );
                })
            }
        </ul>
    );
}

export default GifCard