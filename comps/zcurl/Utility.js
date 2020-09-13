/*Utility Library*/
/*Functions & Fields needed to help ease production
*/
export function InfoURL(url,text=`More Info`){
    return <a href={url} className={"font-weight-bold"} target="_blank" rel="noreferrer noopener">{text}</a>;
}
export const BOOK_REF= "Book Ref";