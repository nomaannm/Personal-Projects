import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";

const Navbar = () => {
    return (
        <div className={""}>
            {/* LEFT */}
            <div className={""}>
                <Link href={"/"}><span className={"text-orange-400"}>UN</span>SOCIAL</Link>
            </div>

            {/* CENTER */}
            <div className={"hidden"}>

            </div>

            {/* RIGHT */}
            <div className={""}>
                <MobileMenu/>
            </div>
        </div>
    );
}

export default Navbar;