export default async function Template({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='animate-appear'>
            <div className='px-4 py-2'>{children}</div>
        </div>
    );
}
