import Anthropic from '@anthropic-ai/sdk';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AnthropicAiService {
  private readonly anthropic: Anthropic;

  constructor(private readonly configService: ConfigService) {
    this.anthropic = new Anthropic({
      apiKey: this.configService.get('ANTHROPIC_API_KEY'),
    });
  }

  async getMessage(content: string) {
    const message = await this.anthropic.messages.create({
      max_tokens: 1024,
      messages: [{ role: 'user', content }],
      model: 'claude-3-opus-20240229',
    });

    return message;
  }
}
