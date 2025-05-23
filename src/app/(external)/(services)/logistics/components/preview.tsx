import React from "react";
import { PencilIcon } from "lucide-react";
import Button from "@/components/ui/button";

export interface PreviewComponentProps {
	title: string;
	sections: {
		title: string;
		fields: {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			label?: any;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			value?: any;
		}[];
	}[];
	onEdit: () => void;
	onProceedToBook: () => void;
	onContactSupport: () => void;
	isSubmitting?: boolean;
}

const PreviewComponent: React.FC<PreviewComponentProps> = ({
	title,
	sections,
	onEdit,
	onProceedToBook,
	onContactSupport,
	isSubmitting = false,
}) => {
	const hasSenderReceiver = sections.some(
		(section) =>
			section.title === "Sender Details" || section.title === "Receiver Details"
	);
	return (
		<div className="bg-transparent p-6 rounded-lg shadow-lg relative sm:w-[80%] mx-auto">
			<h2 className="font-bold text-center text-primary mb-6">{title}</h2>

			<button
				onClick={onEdit}
				className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-800 cursor-pointer"
				aria-label="Edit"
			>
				<PencilIcon size={20} />
				Edit
			</button>
			<div
				className={`${
					hasSenderReceiver ? "grid grid-cols-1 md:grid-cols-2 gap-8" : ""
				}`}
			>
				{sections.map((section, sectionIndex) => (
					<div
						key={sectionIndex}
						className={`mb-6 p-4 rounded-md ${
							section.title === "Shipment Information" && hasSenderReceiver
								? "md:col-span-2"
								: ""
						}`}
					>
						<h4 className="font-medium mb-2">{section.title}</h4>
						<div className="space-y-2">
							{section.fields.map((field, fieldIndex) => (
								<div
									key={fieldIndex}
									className="flex justify-between items-center border-b border-secondary-light pb-2"
								>
									<span className="font-medium">{field.label}</span>
									<div className="flex-shrink-0">
										{typeof field.value === "string" ? (
											<span>{field.value}</span>
										) : (
											field.value
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>

			<div className="flex flex-col md:flex-row gap-4 justify-between mt-6">
				<Button
					onClick={onContactSupport}
					variant="primary"
					animation="ripple"
					className="border border-primary"
				>
					Contact Customer Support
				</Button>

				{isSubmitting ? (
					<Button variant="primary" fullWidth disabled isLoading>
						Processing...
					</Button>
				) : (
					<Button
						onClick={onProceedToBook}
						variant="primary"
						animation="ripple"
						className="border border-primary"
					>
						Proceed To Book
					</Button>
				)}
			</div>
		</div>
	);
};

export default PreviewComponent;
