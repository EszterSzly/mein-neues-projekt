function Section ({ id, title, text}) {
return(
    <section id={id}>
    <h2>{title}</h2>
    <p style={{margin: '0 auto',
        maxWidth: '800px',
        textAlign:'center'}}>
        {text}
    </p>
    
    </section>
);
}
export default Section;