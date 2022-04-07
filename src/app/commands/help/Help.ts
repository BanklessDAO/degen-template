import {
  CommandContext,
  CommandOptionType, MessageOptions,
  SlashCommand,
  SlashCreator,
} from 'slash-create';
import HelpMe from '../../service/help/HelpMe';
import { LogUtils } from '../../utils/Log';

export default class Help extends SlashCommand {
  constructor(creator: SlashCreator) {
    super(creator, {
      name: 'help',
      description: 'Getting more info on help!',
      options: [
        {
          name: 'me',
          type: CommandOptionType.SUB_COMMAND,
          description: 'Information that might help me.',
        },
      ],
      throttling: {
        usages: 3,
        duration: 1,
      },
      defaultPermission: true,
    });
  }
	
  async run(ctx: CommandContext): Promise<any> {
    LogUtils.logCommandStart(ctx);
    if (ctx.user.bot) return;
		
    let messageOptions: MessageOptions;
    switch (ctx.subcommands[0]) {
    case 'me':
      messageOptions = HelpMe();
      break;
    }
    return ctx.send(messageOptions);
  }
}
