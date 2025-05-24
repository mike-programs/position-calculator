import Image from "next/image";

import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Props {
    label: String,
    imgSrc: StaticImport,
    inputHolder: string,
    required?: Boolean
}

export default function InputField({ label, imgSrc, inputHolder, required }: Props) {
    return (
        <div className="flex flex-col gap-2">
            <p className="capitalize">{label}</p>
            <div className="flex gap-3 border border-gray p-3 rounded-sm">
                <Image src={imgSrc} width={20} height={20} alt="risk image"></Image>

                {
                    required ? <input type="text" placeholder={inputHolder} className="w-full outline-none" required /> : <input type="text" placeholder={inputHolder} className="w-full outline-none" />
                }

            </div>
        </div>
    )
}
