// layouts allow you to define UI that is shared between multiple pages. 
// useful for elements like headers footers or navigation menues that you want to appear on multiple pages.
// when navigating between pages that share a layout, only the page component update- the layout doesn't re-render.
// This leads to improved performance and a soothing user experience.
// they also help reduce code duplication and improve the overall the structure of your project.
export default function ProductLayout(
    { children, }: { children: React.ReactNode; }
) {
    return <div>
        {children}
        <div>
            <h2> Fetured products section </h2>
        </div>
    </div>
}
// Here we have created a layout for the Product page
