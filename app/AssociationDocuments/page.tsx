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
import Link from 'next/link';

export default function AssociationDocumentsPage() {
	return (
		<div className="ml-auto mr-auto max-w-[1200px] p-3">
			<section>
				<h1 className="text-3xl">Föreningsdokument</h1>
				<br />
				<br />
				<Table aria-label="Table for association documents">
					<TableHeader>
						<TableColumn>Namn</TableColumn>
						<TableColumn>Storlek</TableColumn>
						<TableColumn>Datum</TableColumn>
						<TableColumn>Meny</TableColumn>
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
											<DropdownItem
												as={Link}
												href="/documents/Arsmotesprotokoll_TJK_2024.pdf"
												target="_blank"
												aria-label="Open Arsmotesprotokoll_TJK_2024">
												Öppna
											</DropdownItem>
											<DropdownItem>
												<Link
													href="/documents/Arsmotesprotokoll_TJK_2024.pdf"
													download="Arsmotesprotokoll_TJK_2024.pdf"
													rel="noopener noreferrer"
													target="_blank"
													aria-label="Download Arsmotesprotokoll_TJK_2024">
													Ladda ner
												</Link>
											</DropdownItem>
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
											<DropdownItem>
												<Link
													className="w-full"
													href="/documents/Verksamhetsberattelse-2023.pdf"
													target="_blank"
													aria-label="Open Verksamhetsberattelse-2023">
													Öppna
												</Link>
											</DropdownItem>
											<DropdownItem
												as={Link}
												href="/documents/Verksamhetsberattelse-2023.pdf"
												download="Verksamhetsberattelse-2023.pdf"
												rel="noopener noreferrer"
												target="_blank"
												aria-label="Download Verksamhetsberattelse-2023">
												Ladda ner
											</DropdownItem>
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
											<DropdownItem
												as={Link}
												href="/documents/Stadgar_TJK.pdf"
												target="_blank"
												aria-label="Open Stadgar_TJK">
												Öppna
											</DropdownItem>
											<DropdownItem>
												<Link
													href="/documents/Stadgar_TJK.pdf"
													download="Stadgar_TJK.pdf"
													rel="noopener noreferrer"
													target="_blank"
													aria-label="Download Stadgar_TJK">
													Ladda ner
												</Link>
											</DropdownItem>
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
