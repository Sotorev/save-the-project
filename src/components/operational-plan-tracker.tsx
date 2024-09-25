'use client';
import React, { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { BellIcon, MenuIcon, SearchIcon } from 'lucide-react'
import Link from 'next/link';
import FinancialDashboard from './financial';

const strategicObjectives = [
	{ id: 1, name: "Mejorar la calidad académica" },
	{ id: 2, name: "Fortalecer la investigación" },
	{ id: 3, name: "Aumentar la proyección social" },
	{ id: 4, name: "Optimizar la gestión administrativa" },
	{ id: 5, name: "Desarrollar infraestructura" },
	{ id: 6, name: "Fomentar la internacionalización" },
	{ id: 7, name: "Promover la innovación tecnológica" }
]

const academicUnits = [
	{ id: 1, name: "Facultad de Ingeniería" },
	{ id: 2, name: "Facultad de Ciencias Económicas" },
	{ id: 3, name: "Facultad de Ciencias y Humanidades" }
]

const months = ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']

const planData = {
	cronograma: [
		{ id: 1, activity: "Revisión curricular", timeline: [true, false, true, false, true, false, true, false, true, false, true, false] },
		{ id: 2, activity: "Capacitación docente", timeline: [false, true, false, true, false, true, false, true, false, true, false, true] }
	],
	actividades: [
		{ id: 1, name: "Actualización de programas", frequency: "Semestral" },
		{ id: 2, name: "Seminarios de investigación", frequency: "Mensual" }
	],
	informacionFacultad: [
		{ id: 1, name: "Facultad de Ingeniería", students: 1500, professors: 80 },
		{ id: 2, name: "Facultad de Ciencias Económicas", students: 1200, professors: 60 }
	],
	proyectos: [
		{ id: 1, name: "Modernización de laboratorios", budget: 500000 },
		{ id: 2, name: "Programa de movilidad estudiantil", budget: 300000 }
	],
	presupuesto: [
		{ id: 1, category: "Investigación", amount: 1000000 },
		{ id: 2, category: "Infraestructura", amount: 2000000 }
	]
}

export default function StrategicPlanTracker() {
	const [activeTab, setActiveTab] = useState('cronograma')
	const [selectedObjective, setSelectedObjective] = useState(strategicObjectives[0].id.toString())
	const [selectedUnit, setSelectedUnit] = useState(academicUnits[0].id.toString())

	const renderTabContent = () => {
		switch (activeTab) {
			case 'cronograma':
				return (
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Actividad</TableHead>
								{months.map(month => <TableHead key={month}>{month}</TableHead>)}
							</TableRow>
						</TableHeader>
						<TableBody>
							{planData.cronograma.map(item => (
								<TableRow key={item.id}>
									<TableCell>{item.activity}</TableCell>
									{item.timeline.map((checked, index) => (
										<TableCell key={index}>
											<Checkbox checked={checked} />
										</TableCell>
									))}
								</TableRow>
							))}
						</TableBody>
					</Table>
				)
			case 'actividades':
				return (
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Actividad</TableHead>
								<TableHead>Frecuencia</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{planData.actividades.map(item => (
								<TableRow key={item.id}>
									<TableCell>
										<Link href={"/actividad"}>
											{item.name}
										</Link>
									</TableCell>
									<TableCell>{item.frequency}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				)
			case 'informacionFacultad':
				return (
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Facultad</TableHead>
								<TableHead>Estudiantes</TableHead>
								<TableHead>Profesores</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{planData.informacionFacultad.map(item => (
								<TableRow key={item.id}>
									<TableCell>{item.name}</TableCell>
									<TableCell>{item.students}</TableCell>
									<TableCell>{item.professors}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				)
			case 'proyectos':
				return (
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Proyecto</TableHead>
								<TableHead>Presupuesto</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{planData.proyectos.map(item => (
								<TableRow key={item.id}>
									<TableCell>{item.name}</TableCell>
									<TableCell>${item.budget.toLocaleString()}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				)
			case 'presupuesto':
				return (
					<FinancialDashboard />
				)
			default:
				return null
		}
	}

	return (
		<div className="min-h-screen bg-white">

			<main className="p-6">
				<h1 className="text-3xl font-bold mb-6 text-center text-[rgb(1,99,59)]">Plan Estratégico 2023-2027</h1>

				<div className="grid grid-cols-2 gap-4 mb-6">
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">Objetivo Estratégico:</label>
						<Select value={selectedObjective} onValueChange={setSelectedObjective}>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Seleccionar objetivo" />
							</SelectTrigger>
							<SelectContent>
								{strategicObjectives.map(objective => (
									<SelectItem key={objective.id} value={objective.id.toString()}>
										{objective.name}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
					<div>
						<label className="block text-sm font-medium text-gray-700 mb-1">Unidad Académica:</label>
						<Select value={selectedUnit} onValueChange={setSelectedUnit}>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Seleccionar unidad" />
							</SelectTrigger>
							<SelectContent>
								{academicUnits.map(unit => (
									<SelectItem key={unit.id} value={unit.id.toString()}>
										{unit.name}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
				</div>

				<div className="flex space-x-2 mb-6">
					{['cronograma', 'actividades', 'informacionFacultad', 'proyectos', 'presupuesto'].map((tab) => (
						<Button
							key={tab}
							variant={activeTab === tab ? 'default' : 'outline'}
							onClick={() => setActiveTab(tab)}
						>
							{tab.charAt(0).toUpperCase() + tab.slice(1)}
						</Button>
					))}
				</div>

				{renderTabContent()}
			</main>
		</div>
	)
}