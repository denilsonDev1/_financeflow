import { type Instituition, Prisma } from "@prisma/client";
import { db } from "..";
export class InstituitionRepository {
	public async create(
		data: Omit<Instituition, "created_at" | "updated_at">,
	): Promise<{ success: boolean; message: string; data: Instituition | null }> {
		try {
			const _instituition = await db.instituition.create({
				data: data,
			});
			return {
				success: true,
				message: "instituition created",
				data: _instituition,
			};
		} catch (error) {
			console.error(error);

			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				if (error.code === "P2002") {
					return {
						success: false,
						message: "intituition already exists",
						data: null,
					};
				}
				return {
					success: false,
					message: error.message,
					data: null,
				};
			}
			return {
				success: false,
				message: "error unknown",
				data: null,
			};
		}
	}

	public async findById(_id: string): Promise<{
		success: boolean;
		message: string;
		data: Instituition | null;
	}> {
		try {
			const instituition = await db.instituition.findUnique({
				where: {
					id: _id,
				},
			});
			return {
				success: true,
				message: "instituition found",
				data: instituition,
			};
		} catch (error) {
			console.error(error);
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				if (error.code === "P2002") {
					return {
						success: false,
						message: "instituition already exists",
						data: null,
					};
				}
				return {
					success: false,
					message: error.message,
					data: null,
				};
			}
			return {
				success: false,
				message: "error unknown",
				data: null,
			};
		}
	}

	public async findAll() {
		try {
			const instituitions = await db.instituition.findMany();
			return {
				success: true,
				message: "instituitions found",
				data: instituitions,
			};
		} catch (error) {
			console.error(error);
			if (error instanceof Prisma.PrismaClientKnownRequestError) {
				if (error.code === "P2002") {
					return {
						success: false,
						message: "instituition already exists",
						data: null,
					};
				}
				return {
					success: false,
					message: error.message,
					data: null,
				};
			}
			return {
				success: false,
				message: "error unknown",
				data: null,
			};
		}
	}
}
