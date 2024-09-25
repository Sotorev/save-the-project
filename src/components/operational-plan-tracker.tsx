import { useState } from 'react'
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Table } from "@/components/ui/table"

export default function OperationalPlanTracker() {
	const [activeTab, setActiveTab] = useState('global')
	const [selectedPlan, setSelectedPlan] = useState('2023 | Facultad de Ingeniería')
	const [selectedPeriod, setSelectedPeriod] = useState('Segundo Semestre')

	return (
		<div className="min-h-screen bg-white">
			<header className="bg-blue-900 text-white p-4 flex justify-between items-center">
				<div className="flex items-center space-x-4">
					<span className="text-2xl font-bold">UDB</span>
					<span className="text-xl">GPI</span>
				</div>
				<div className="flex items-center space-x-4">
					<button className="p-2">
						<BellIcon className="h-5 w-5" />
					</button>
					<div className="flex items-center space-x-2">
						<img src="/placeholder.svg" alt="User" className="h-8 w-8 rounded-full" />
						<span>mario juarez</span>
					</div>
				</div>
			</header>

			<nav className="bg-gray-100 p-4">
				<ul className="flex space-x-4">
					<li>Planes</li>
					<li>Reportes</li>
					<li>Seguimiento</li>
				</ul>
			</nav>

			<main className="p-6">
				<h1 className="text-3xl font-bold mb-6">Seguimiento planes operativos</h1>

				<div className="flex space-x-2 mb-6">
					<Button
						variant={activeTab === 'global' ? 'default' : 'outline'}
						onClick={() => setActiveTab('global')}
					>
						Vista global
					</Button>
					<Button
						variant={activeTab === 'detail' ? 'default' : 'outline'}
						onClick={() => setActiveTab('detail')}
					>
						Detalle
					</Button>
				</div>

				<div className="grid gap-4 mb-6">
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">Plan operativo:</label>
						<Select value={selectedPlan} onValueChange={setSelectedPlan}>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Select plan" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="2023 | Facultad de Ingeniería">2023 | Facultad de Ingeniería</SelectItem>
								{/* Add more options as needed */}
							</SelectContent>
						</Select>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">Período:</label>
						<Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Select period" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="Segundo Semestre">Segundo Semestre</SelectItem>
								{/* Add more options as needed */}
							</SelectContent>
						</Select>
					</div>
				</div>

				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Acciones</TableHead>
							<TableHead>Medios de v.</TableHead>
							<TableHead>Responsables</TableHead>
							<TableHead>Cronograma</TableHead>
							<TableHead>Avance</TableHead>
							<TableHead>Justificación</TableHead>
							<TableHead>Logros</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell colSpan={7} className="bg-gray-100">
								<h3 className="font-bold">1.1. Aumentar el posicionamiento de la universidad respecto a los proyectos sociales que desarrolla.</h3>
								<p><strong>Objetivo Segundo Nivel:</strong> 1.1.3. Desarrollar proyectos de impacto social en el período.</p>
								<p><strong>Indicador:</strong> No. de Proyectos de impacto social por año (clasificar por áreas temáticas).</p>
								<p><strong>Metas:</strong> Aumentar en un 10% los proyectos de impacto social en el período. Áreas temáticas: Igualdad de género, cultural, tecnológico, académico, medio ambiental, crecimiento económico.</p>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Desarrollar al menos seis Proyectos de Proyección Social</TableCell>
							<TableCell>Herramienta de administración de proyectos de proyección social.</TableCell>
							<TableCell>Directores de Escuela y Decano</TableCell>
							<TableCell>
								{/* Add checkboxes for E, F, M, A, M, J, J, A, S, O, N, D */}
							</TableCell>
							<TableCell>100%</TableCell>
							<TableCell>Actividad Finalizada</TableCell>
							<TableCell>Aunque no ha sido igual en todas las escuelas, se logró realizar más de seis proyectos, que se encuentran registrados en la herramienta del Portal Web.</TableCell>
						</TableRow>
						{/* Add more rows as needed */}
					</TableBody>
				</Table>
			</main>
		</div>
	)
}