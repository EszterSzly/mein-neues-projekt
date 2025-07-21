function Section ({ id, title, text}) {
return(
    <section id={id}>
    <h2>{title}</h2>
    <p>
        {text}
    </p>
    
    </section>
);
}
export default Section;