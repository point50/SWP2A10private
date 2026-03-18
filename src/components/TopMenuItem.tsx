import Link from "next/link"

export default function TopMenuItem({title, pageRef}:{title:string,pageRef:string}) {
    return (
        <Link
            href={pageRef}
            className="w-[120px] text-center font-[Verdana] text-[14pt] font-bold !text-black hover:!text-white hover:bg-black h-full flex items-center justify-center"
        >
            {title}
        </Link>
    );
}