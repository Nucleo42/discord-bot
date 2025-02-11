import { AdminPermissionService } from "@services/AdminPermissionService";
import { container } from "tsyringe";
import { GeminiIA } from "@infrastructure/IA/Gemini";
import { getProjectSlotsGemini } from "@infrastructure/IA/GetProjectSlotsGemini";

container.register(AdminPermissionService, AdminPermissionService);
container.register(GeminiIA, GeminiIA);
container.register(getProjectSlotsGemini, getProjectSlotsGemini);
