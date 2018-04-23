import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="stylesheet" href="/_next/static/style.css" />
                    <link href="data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHl2df+op6P/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs6+u/x4fJP8gHyP/IB8k/yAfI/+MiIf/AAAAAAAAAAAAAAAAAAAAAAAAAABST0//Hx4h/wAAAAAAAAAA+/r6Bh8fJP9LSEj/T01O/0lHSP9OTEz/Hx8i//r6+gcAAAAAAAAAAB8dIf+UkI7/RkRE/yAfJP8fHyL/IB8k/1BNTf8gHyT/IB8k/09NTv9MSkr/IB8j/yAfJP95d3T/IB8k/x8fI/8gHyT/Hx8i/1FOTv8gHyT/IB8i/yAfI/8fHyL/Hx8i/x8fIv8gHyP/Hx8j/yAfI/8fHyP/IB8k/x8fI/8gICT/Hx8i/09MS/8AAAAAPjs8/x8fI/8fHyP/IB8k/01LSv9ST0//IB8k/x8fIv9ST0//TUtL/x8fIv8fHyL/IB8k/yAfJP8AAAAAAAAAAJmVlP8fHyL/Hx8i/x8fIv9PTE3/T0xN/yAfI/8gHyP/T0xN/09MTf8fHyL/Hx8i/yAfJP9MS0r/AAAAAAAAAAAAAAAAbWtq/yAfI/8aGR//IB8j/yAfJP8gHyP/Hx8i/yAfJP8fHiL/Gxof/yAfJP8fHyL/AAAAAAAAAAAAAAAAAAAAAAAAAAAgHyP/Ly4x/x0aHf8fHyP/ICAj/x8eIv8fHyL/HRwf/zAvMf8gHyT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQj9A/yAfI/8fHyP/Hx8i/z49Pv8fHyP/IB8k/yAfI/8gHyP/Hx8j/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHp2df8fHyP/Hx8k/x8fIv9iYWD/LCwt/yAfJP8gHyT/Hx8i/yAfJP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHx8j/yAfJP8fHyP/YF5d/0RBQv8fHyL/Hx8k/yAfJP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIWBgP8gHyT/Hx8j/1pYVv9ZV1b/Hx8i/yAfJP8gHyT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQkBA/4SAf/9KSUj/Yl9f/3p2df9JRkb/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAP5/AAD4HwAAOBwAAAAAAAAAAAAAgAEAAIABAADAAwAA4AcAAOAHAADgBwAA8A8AAPAPAAD4HwAA//8AAA==" rel="icon" type="image/x-icon" />
                    <title>StarQuiz</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}