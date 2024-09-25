'use client';
import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const months = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC']

const financialData = {
	localCurrency: {
		initialFunds: 56500000,
		operatingFunds: 27500000,
		deposits: 29000000,
		monthlyData: [
			{ month: 'ENE', income: 9346684, expenses: 3549711, balance: 62296974 },
			{ month: 'FEB', income: 6706357, expenses: 4454292, balance: 64549039 },
			{ month: 'MAR', income: 5431090, expenses: 4752322, balance: 65227808 },
			{ month: 'ABR', income: 4527522, expenses: 4880824, balance: 64874507 },
			{ month: 'MAY', income: 5129839, expenses: 4889826, balance: 65114520 },
			{ month: 'JUN', income: 8962440, expenses: 4790828, balance: 69286132 },
			{ month: 'JUL', income: 7852682, expenses: 5342330, balance: 71796485 },
			{ month: 'AGO', income: 5463171, expenses: 7235832, balance: 70023824 },
			{ month: 'SEP', income: 5741456, expenses: 4485834, balance: 71279447 },
			{ month: 'OCT', income: 5340517, expenses: 5150836, balance: 71469128 },
			{ month: 'NOV', income: 5742850, expenses: 4837838, balance: 72374141 },
			{ month: 'DIC', income: 2547088, expenses: 4358740, balance: 70562490 }
		],
		totalIncome: 72791698,
		totalExpenses: 58729208,
		finalBalance: 70562490
	},
	usd: {
		initialFunds: 7337662,
		operatingFunds: 3571429,
		deposits: 3766234,
		monthlyData: [
			{ month: 'ENE', income: 1335241, expenses: 507102, balance: 8165801 },
			{ month: 'FEB', income: 870955, expenses: 578479, balance: 8458277 },
			{ month: 'MAR', income: 705336, expenses: 617185, balance: 8546429 },
			{ month: 'ABR', income: 587990, expenses: 633873, balance: 8500546 },
			{ month: 'MAY', income: 666213, expenses: 635042, balance: 8531717 },
			{ month: 'JUN', income: 1163953, expenses: 622185, balance: 9073484 },
			{ month: 'JUL', income: 1019829, expenses: 693809, balance: 9399504 },
			{ month: 'AGO', income: 709503, expenses: 939718, balance: 9169289 },
			{ month: 'SEP', income: 745644, expenses: 582576, balance: 9332356 },
			{ month: 'OCT', income: 693574, expenses: 668940, balance: 9356990 },
			{ month: 'NOV', income: 745825, expenses: 628291, balance: 9474524 },
			{ month: 'DIC', income: 363870, expenses: 622677, balance: 9215717 }
		],
		totalIncome: 9607932,
		totalExpenses: 7729877,
		finalBalance: 9215717
	}
}

export default function FinancialDashboard() {
	const [currency, setCurrency] = useState('localCurrency')

	const data = financialData[currency]

	return (
		<div className="min-h-screen bg-[rgb(1,99,59)] p-8">
			<Card className="w-full max-w-6xl mx-auto">
				<CardHeader>
					<CardTitle className="text-2xl font-bold text-center text-[rgb(1,99,59)]">
						Presupuesto de Ingresos y Gastos
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Tabs defaultValue="summary" className="w-full">
						<TabsList className="grid w-full grid-cols-4">
							<TabsTrigger value="summary">Resumen</TabsTrigger>
							<TabsTrigger value="monthly">Datos Mensuales</TabsTrigger>
							<TabsTrigger value="chart">Gráfico</TabsTrigger>
							<TabsTrigger value="details">Detalles</TabsTrigger>
						</TabsList>
						<div className="mt-4 mb-6">
							<select
								value={currency}
								onChange={(e) => setCurrency(e.target.value)}
								className="p-2 border rounded"
							>
								<option value="localCurrency">Moneda Local</option>
								<option value="usd">USD</option>
							</select>
						</div>
						<TabsContent value="summary">
							<Card>
								<CardHeader>
									<CardTitle>Resumen Financiero</CardTitle>
								</CardHeader>
								<CardContent>
									<Table>
										<TableBody>
											<TableRow>
												<TableCell className="font-medium">Fondos Iniciales</TableCell>
												<TableCell>{data.initialFunds.toLocaleString()}</TableCell>
											</TableRow>
											<TableRow>
												<TableCell className="font-medium">Fondos Operativos</TableCell>
												<TableCell>{data.operatingFunds.toLocaleString()}</TableCell>
											</TableRow>
											<TableRow>
												<TableCell className="font-medium">Depósitos e Inversiones</TableCell>
												<TableCell>{data.deposits.toLocaleString()}</TableCell>
											</TableRow>
											<TableRow>
												<TableCell className="font-medium">Ingresos Totales</TableCell>
												<TableCell>{data.totalIncome.toLocaleString()}</TableCell>
											</TableRow>
											<TableRow>
												<TableCell className="font-medium">Gastos Totales</TableCell>
												<TableCell>{data.totalExpenses.toLocaleString()}</TableCell>
											</TableRow>
											<TableRow>
												<TableCell className="font-medium">Balance Final</TableCell>
												<TableCell>{data.finalBalance.toLocaleString()}</TableCell>
											</TableRow>
										</TableBody>
									</Table>
								</CardContent>
							</Card>
						</TabsContent>
						<TabsContent value="monthly">
							<Card>
								<CardHeader>
									<CardTitle>Datos Mensuales</CardTitle>
								</CardHeader>
								<CardContent>
									<Table>
										<TableHeader>
											<TableRow>
												<TableHead>Mes</TableHead>
												<TableHead>Ingresos</TableHead>
												<TableHead>Gastos</TableHead>
												<TableHead>Balance</TableHead>
											</TableRow>
										</TableHeader>
										<TableBody>
											{data.monthlyData.map((month) => (
												<TableRow key={month.month}>
													<TableCell>{month.month}</TableCell>
													<TableCell>{month.income.toLocaleString()}</TableCell>
													<TableCell>{month.expenses.toLocaleString()}</TableCell>
													<TableCell>{month.balance.toLocaleString()}</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</CardContent>
							</Card>
						</TabsContent>
						<TabsContent value="chart">
							<Card>
								<CardHeader>
									<CardTitle>Gráfico Financiero</CardTitle>
								</CardHeader>
								<CardContent>
									<ResponsiveContainer width="100%" height={400}>
										<LineChart data={data.monthlyData}>
											<CartesianGrid strokeDasharray="3 3" />
											<XAxis dataKey="month" />
											<YAxis />
											<Tooltip />
											<Legend />
											<Line type="monotone" dataKey="income" stroke="#8884d8" name="Ingresos" />
											<Line type="monotone" dataKey="expenses" stroke="#82ca9d" name="Gastos" />
											<Line type="monotone" dataKey="balance" stroke="#ffc658" name="Balance" />
										</LineChart>
									</ResponsiveContainer>
								</CardContent>
							</Card>
						</TabsContent>
						<TabsContent value="details">
							<Card>
								<CardHeader>
									<CardTitle>Detalles Financieros</CardTitle>
								</CardHeader>
								<CardContent>
									<p>Esta sección podría incluir información más detallada sobre ingresos, gastos, inversiones, etc.</p>
								</CardContent>
							</Card>
						</TabsContent>
					</Tabs>
				</CardContent>
			</Card>
		</div>
	)
}