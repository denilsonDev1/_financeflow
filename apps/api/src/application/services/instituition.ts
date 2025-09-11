import { Instituition } from "../../domain/instituition/entity";
import type { InstitutionType } from "../../domain/instituition/types";
import type { InstituitionRepository } from "../../infrastructure/database/repositories/instituition";
import type { InstituitionBody } from "../../presentation/http/controllers/instituition/dto";

export class InstituitionService {
	constructor(
		private readonly instituitionRepository: InstituitionRepository,
	) {}

	public async create(data: InstituitionBody) {
		const instituition = Instituition.create({
			...data,
			type: data.type as InstitutionType,
		});
		const _instituition = await this.instituitionRepository.create({
			...instituition.getData(),
		});
		return _instituition;
	}

	public async findById(id: string) {
		const instituition = await this.instituitionRepository.findById(id);
		return instituition;
	}

	public async findAll() {
		const instituitions = await this.instituitionRepository.findAll();
		return instituitions;
	}
}
