
const CardDetail = (props) => {
    if (props.card === undefined) {
        return (
            <>
                <BackToList />
                <RouteError />
            </>
        );
    } else
        return (
            <>
                <BackToList />
                <article className="detail">
                    <img src={props.image} alt={props.card.name} className="img-detail"/>
                    <div className="info-detail">
                        <h3 className="detail-name">{props.card.name}</h3>
                        <button></button>
                    </div>
                </article>
            </>
        )
}