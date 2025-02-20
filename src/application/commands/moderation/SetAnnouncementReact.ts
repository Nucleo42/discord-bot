import { Command } from "@interfaces/discord/Command";
import {
  ApplicationCommandOptionType,
  ApplicationCommandType,
} from "discord.js";
import { container } from "tsyringe";
import { SetAnnouncementReactService } from "@services/commands/SetAnnouncementReactService";

export default new Command({
  name: "set-announcement-react",
  description: "Comando para definir a reação no anúncio",
  type: ApplicationCommandType.ChatInput,
  options: [
    {
      name: "is-enabled",
      description: "Se a reação está habilitada",
      type: ApplicationCommandOptionType.Boolean,
      required: true,
    },
    {
      name: "channel-to-listen",
      description: "O canal para ouvir as mensagens",
      type: ApplicationCommandOptionType.Channel,
      required: true,
    },
    {
      name: "reaction-emote",
      description: "O emote para reagir",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],
  execute: container
    .resolve(SetAnnouncementReactService)
    .execute.bind(container.resolve(SetAnnouncementReactService)),
});
