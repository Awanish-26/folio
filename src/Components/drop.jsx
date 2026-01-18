const Count = 32;
const drops = Array.from({ length: Count }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}vw`,
    delay: `${Math.random() * 5}s`
}));

export default function Drop() {

    return (
        <div className="fixed -top-5 bottom-0 left-0 right-0 bg-transparent overflow-hidden pointer-events-none">
            {drops.map((drop) => (
                <div key={drop.id}
                    className="rain-drop"
                    style={{
                        left: drop.left,
                        animationDelay: drop.delay,
                    }}
                ></div>
            ))}
        </div>
    )
}

