function StatCard({

    icon,

    title,

    value,

    unit = "",

    color = "#4fd1ff"

}) {

    return (

        <div className="stat-card glass">

            <div
                className="stat-icon"
                style={{ color }}
            >

                {icon}

            </div>

            <div className="stat-content">

                <h4>

                    {title}

                </h4>

                <h2>

                    {value}

                    <span>

                        {unit}

                    </span>

                </h2>

            </div>

        </div>

    );

}

export default StatCard;