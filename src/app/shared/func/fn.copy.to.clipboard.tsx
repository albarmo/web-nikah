import toast from "react-hot-toast";

const copyToClipBoard = async (copyMe: string) => {
    try {
        await navigator.clipboard.writeText(copyMe);
        toast.success('Berhasil copy!')
    } catch (error: unknown) {
        toast.error('Failed to copy!')
        console.log(error)
    }
};

export default copyToClipBoard