'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Component() {
	const months = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC']
	const stages = [
		{ name: 'Planificación', start: 0, duration: 2 },
		{ name: 'Diseño', start: 1, duration: 2 },
		{ name: 'Ejecución', start: 3, duration: 6 },
		{ name: 'Análisis de Resultados', start: 9, duration: 2 },
		{ name: 'Resultados Revisados por el Decano', start: 11, duration: 1 }
	]

	const getColor = (index: number) => {
		const colors = ['bg-green-200', 'bg-green-300', 'bg-green-400', 'bg-green-500', 'bg-green-600']
		return colors[index % colors.length]
	}

	const currentMonth = 3 // Abril (0-indexed)

	return (
		<Card className="w-full max-w-4xl mx-auto">
			<CardHeader>
				<CardTitle>Monitoreo de Actividad POA</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid gap-4">
					<div className="grid gap-2">
						<h3 className="font-semibold">Objetivo Estratégico</h3>
						<p className="text-sm text-gray-500">
							Mejorar la calidad de la educación y la investigación en la universidad
						</p>
					</div>
					<div className="grid gap-2">
						<h3 className="font-semibold">Actividad</h3>
						<p className="text-sm text-gray-500">
							Implementar un programa de desarrollo profesional para docentes
						</p>
					</div>
					<div className="grid gap-2">
						<h3 className="font-semibold">Resultados Deseados</h3>
						<p className="text-sm text-gray-500">
							Aumento en la satisfacción de los estudiantes y mejora en los resultados de aprendizaje
						</p>
					</div>
					<div className="grid gap-2">
						<h3 className="font-semibold">Colaboradores</h3>
						<p className="text-sm text-gray-500">
							Departamento de Recursos Humanos, Facultades, Vicerrectoría Académica
						</p>
					</div>
					<div className="grid gap-2">
						<h3 className="font-semibold">Plazo</h3>
						<p className="text-sm text-gray-500">
							1 año académico (Enero - Diciembre)
						</p>
					</div>
					<div className="grid gap-2">
						<h3 className="font-semibold">Tipo de Recurso</h3>
						<p className="text-sm text-gray-500">
							Financiero, Humano, Tecnológico
						</p>
					</div>
					<div className="grid gap-2">
						<h3 className="font-semibold">Variables de Medición</h3>
						<p className="text-sm text-gray-500">
							Número de docentes capacitados, Evaluaciones de desempeño, Encuestas de satisfacción estudiantil
						</p>
					</div>
					<div className="grid gap-2">
						<h3 className="font-semibold">Medio de Verificación</h3>
						<p className="text-sm text-gray-500">
							Registros de asistencia, Informes de evaluación, Resultados de encuestas
						</p>
					</div>
					<div className="grid gap-2">
						<h3 className="font-semibold">Presupuesto</h3>
						<p className="text-sm text-gray-500">
							Q. 100,000.00
						</p>
					</div>
					<div className="grid gap-2">
						<h3 className="font-semibold">Estado Actual</h3>
						<div className="overflow-x-auto">
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead className="w-[200px]">Etapa</TableHead>
										{months.map((month) => (
											<TableHead key={month} className="text-center w-[60px]">{month}</TableHead>
										))}
									</TableRow>
								</TableHeader>
								<TableBody>
									{stages.map((stage, index) => (
										<TableRow key={stage.name}>
											<TableCell className="font-medium">{stage.name}</TableCell>
											{months.map((_, monthIndex) => (
												<TableCell key={monthIndex} className="p-0">
													{monthIndex >= stage.start && monthIndex < stage.start + stage.duration && (
														<TooltipProvider>
															<Tooltip>
																<TooltipTrigger asChild>
																	<div
																		className={`w-full h-full ${getColor(index)} ${monthIndex === currentMonth ? 'ring-2 ring-blue-500' : ''
																			}`}
																	>
																		&nbsp;
																	</div>
																</TooltipTrigger>
																<TooltipContent>
																	<p>{stage.name}</p>
																	<p>{months[stage.start]} - {months[stage.start + stage.duration - 1]}</p>
																</TooltipContent>
															</Tooltip>
														</TooltipProvider>
													)}
												</TableCell>
											))}
										</TableRow>
									))}
								</TableBody>
							</Table>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}