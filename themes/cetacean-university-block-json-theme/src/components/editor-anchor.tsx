import { cancelRedirect } from "@src/utils/cancelRedirect";

export function EditorAnchor(props: React.AnchorHTMLAttributes<HTMLAnchorElement>){
    return (
    <a onClick={cancelRedirect} {...props} />
    );
}