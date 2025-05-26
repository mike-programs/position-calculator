import Image from "next/image";

import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Props {
    label: String,
    imgSrc: StaticImport,
    inputHolder: string,
    required?: Boolean,
    name: string
}

export default function InputField({ label, imgSrc, inputHolder, required, name }: Props) {
    return (
        <div className="flex flex-col gap-2">
            <p className="capitalize">{label}</p>
            <div className="flex gap-3 border border-gray p-3 rounded-sm">
                <Image src={imgSrc} width={20} height={20} alt="input-image" unoptimized></Image>

                {
                    required ? <input type="text" name={name} placeholder={inputHolder} className="w-full outline-none" required /> : <input type="text" name={name} placeholder={inputHolder} className="w-full outline-none" />
                }
            </div>
        </div>
    )
}
