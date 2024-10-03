'use client';
import { Icon } from '@iconify/react/dist/iconify.js';
import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from '@nextui-org/react';

export default function AssociationDocumentsPage() {
	return (
		<div className="ml-auto mr-auto max-w-[1200px] p-3">
			<section>
				<h1 className="text-3xl">Föreningsdokument</h1>
				<br />
				<Table aria-label="Table for association documents">
					<TableHeader>
						<TableColumn>Namn</TableColumn>
						<TableColumn>Storlek</TableColumn>
						<TableColumn>Datum</TableColumn>
						<TableColumn>Typ</TableColumn>
					</TableHeader>
					<TableBody>
						<TableRow key="1">
							<TableCell>Årsmötesprotokoll_TJK_2024</TableCell>
							<TableCell>88.16 KB</TableCell>
							<TableCell>februari 14, 2024</TableCell>
							<TableCell>
								<div className="relative flex items-center justify-end gap-2">
									<Dropdown>
										<DropdownTrigger>
											<Button isIconOnly size="sm" variant="light">
												<Icon
													className="text-default-500"
													icon="ph:dots-three-vertical-bold"
													width={24}
												/>
											</Button>
										</DropdownTrigger>
										<DropdownMenu>
											<DropdownItem>Öppna</DropdownItem>
											<DropdownItem>Ladda ner</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</div>
							</TableCell>
						</TableRow>
						<TableRow key="2">
							<TableCell>Verksamhetsberättelse 2023</TableCell>
							<TableCell>693.05 KB</TableCell>
							<TableCell>februari 14, 2024</TableCell>
							<TableCell>
								<div className="relative flex items-center justify-end gap-2">
									<Dropdown>
										<DropdownTrigger>
											<Button isIconOnly size="sm" variant="light">
												<Icon
													className="text-default-500"
													icon="ph:dots-three-vertical-bold"
													width={24}
												/>
											</Button>
										</DropdownTrigger>
										<DropdownMenu>
											<DropdownItem>Öppna</DropdownItem>
											<DropdownItem>Ladda ner</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</div>
							</TableCell>
						</TableRow>
						<TableRow key="3">
							<TableCell>Stadgar_TJK</TableCell>
							<TableCell>262.4 KB</TableCell>
							<TableCell>januari 3, 2023</TableCell>
							<TableCell>
								<div className="relative flex items-center justify-end gap-2">
									<Dropdown>
										<DropdownTrigger>
											<Button isIconOnly size="sm" variant="light">
												<Icon
													className="text-default-500"
													icon="ph:dots-three-vertical-bold"
													width={24}
												/>
											</Button>
										</DropdownTrigger>
										<DropdownMenu>
											<DropdownItem>Öppna</DropdownItem>
											<DropdownItem>Ladda ner</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</div>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</section>
		</div>
	);
}
