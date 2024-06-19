import { Button, ColorIndicator } from "@wordpress/components";

export type ColorButtonProps = {
    colorValue: string
} & React.ComponentProps<typeof Button>;

export function ColorButton({
    children,
    colorValue,
    style,
    ...props
}: ColorButtonProps){
    return (
    <Button
        {...props}
        style={{
            flex: 1, 
            padding: 10,
            border: "1px solid #ddd", 
            display: "flex",
            alignItems: "center",
            gap: 10,
            ...style
        }}
    >
        <ColorIndicator
            colorValue={colorValue}
        />
        {children}
    </Button>
    );
}