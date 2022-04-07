require('wokcommands')
const {MessageEmbed} = require("discord.js");
const actions = ['SrStaff', 'srstaff', 'Staff', 'staff', 'JrStaff', 'jrstaff', 'SrMod', 'srmod', 'Mod', 'mod', 'JrMod', 'jrmod', 'DStreamer', 'dstreamer', 'GStreamer', 'gstreamer', 'Streamer', 'streamer', 'Media', 'media', 'Aparater', 'aparater', 'Youtuber', 'youtuber', 'jrhelper', 'JrHelper', 'Helper', 'helper', 'SrHelper', 'srhelper']

module.exports = {
    category: 'Role-MNG',
    description: 'Just Gives Roles',
    minArgs: 2,
    aliases: 'JMK',
    expectedArgs: '[role] [user]',
    guildOnly: true,

    callback: ({ args, message, guild }) => {
        const action = args.shift()
        if (!action || !actions.includes(action)) {
            return new MessageEmbed()
                .setColor('GOLD')
                .setDescription(`Incorrect usage! use JMake [Role] [UserTag]`)
        }
        const memberId = args.shift().replace(/[<@!&>]/g, '')
        const member = guild.members.cache.get(memberId)
        //If Member is the Dev
        if (memberId === '946355425631141901') {
            return new MessageEmbed()
                .setColor('GOLD')
                .setDescription('<a:RedButton:952118805566472232>You cannot give any roles to the Jw.gg developer<a:RedButton:952118805566472232>')
        }
        //If Member is the owner
        if (member.permissions.has('ADMINISTRATOR')) {
            return new MessageEmbed()
                .setColor('GOLD')
                .setDescription('<a:RedButton:952118805566472232>Mentioned member got "ADMINISTRATOR" permissions<a:RedButton:952118805566472232>')
        }
        //If Member is the bot
        if (memberId === '933064836902948894') {
            return new MessageEmbed()
                .setColor('GOLD')
                .setDescription(`<a:RedButton:952118805566472232>You can't give me any roles<a:RedButton:952118805566472232>`)
        }
        // If Member is MessageAuthor
        if (memberId === message.author.id) {
            return new MessageEmbed()
                .setColor('GOLD')
                .setDescription(`<a:RedButton:952118805566472232>You can't give your self any roles<a:RedButton:952118805566472232>`)
        }

        if (action === 'SrStaff' || action === 'srstaff') {
            if (member.roles.cache.has('946065948299907082') || member.roles.cache.has('946065956378120222') || member.roles.cache.has('946065959997825025')) {
                if (message.member.roles.cache.has('946327095024427048') || message.member.permissions.has('ADMINISTRATOR')) {
                    if (!member.roles.cache.has('946044282148642816')) {
                        if (member.roles.cache.has('946044292651167764')) {
                            member.roles.remove('946044292651167764')
                            member.roles.add('946044282148642816')
                            return new MessageEmbed()
                                .setColor('GOLD')
                                .setDescription(`Made <@${memberId}> a **"SrStaff"**`)
                        } else if (member.roles.cache.has('946044288058400838')) {
                            member.roles.remove('946044288058400838')
                            member.roles.add('946044282148642816')
                            return new MessageEmbed()
                                .setColor('GOLD')
                                .setDescription(`Made <@${memberId}> a **"SrStaff"**`)
                        }
                    } else {
                        return new MessageEmbed()
                            .setColor('GOLD')
                            .setDescription(`<a:RedButton:952118805566472232><@${memberId}> already has that role<a:RedButton:952118805566472232>`)
                    }
                } else {
                    return new MessageEmbed()
                        .setColor('GOLD')
                        .setDescription(`<a:RedButton:952118805566472232>You need **"HeadMod"** permissions<a:RedButton:952118805566472232>`)
                }
            } else if (member.roles.cache.has('946065963659448361') || member.roles.cache.has('946065967832772628') || member.roles.cache.has('946065971074969662')) {
                if (message.member.roles.cache.has('854031216487432214') || message.member.permissions.has('ADMINISTRATOR')) {
                    if (!member.roles.cache.has('946044282148642816')) {
                        if (member.roles.cache.has('946044292651167764')) {
                            member.roles.remove('946044292651167764')
                            member.roles.add('946044282148642816')
                            return new MessageEmbed()
                                .setColor('GOLD')
                                .setDescription(`Made <@${memberId}> a SrStaff`)
                        } else if (member.roles.cache.has('946044288058400838')) {
                            member.roles.remove('946044288058400838')
                            member.roles.add('946044282148642816')
                            return new MessageEmbed()
                                .setColor('GOLD')
                                .setDescription(`Made <@${memberId}> a SrStaff`)
                        }
                    } else {
                        return new MessageEmbed()
                            .setColor('GOLD')
                            .setDescription(`<a:RedButton:952118805566472232><@${memberId}> already has that role<a:RedButton:952118805566472232>`)
                    }
                } else {
                    return new MessageEmbed()
                        .setColor('GOLD')
                        .setDescription(`<a:RedButton:952118805566472232>You need **"HeadHelper"** permissions<a:RedButton:952118805566472232>`)
                }
            }
        } else if (action === 'Staff' || action === 'staff') {
            if (member.roles.cache.has('946065948299907082') || member.roles.cache.has('946065956378120222') || member.roles.cache.has('946065959997825025')) {
                if (message.member.roles.cache.has('946327095024427048') || message.member.permissions.has('ADMINISTRATOR')) {
                    if (!member.roles.cache.has('946044292651167764')) {
                        if (member.roles.cache.has('946044282148642816')) {
                            member.roles.remove('946044282148642816')
                            member.roles.add('946044292651167764')
                            return new MessageEmbed()
                                .setColor('GOLD')
                                .setDescription(`Made <@${memberId}> a Staff`)
                        } else if (member.roles.cache.has('946044288058400838')) {
                            member.roles.remove('946044288058400838')
                            member.roles.add('946044292651167764')
                            return new MessageEmbed()
                                .setColor('GOLD')
                                .setDescription(`Made <@${memberId}> a Staff`)
                        }
                    } else {
                        return new MessageEmbed()
                            .setColor('GOLD')
                            .setDescription(`<a:RedButton:952118805566472232><@${memberId}> already has that role<a:RedButton:952118805566472232>`)
                    }
                } else {
                    return new MessageEmbed()
                        .setColor('GOLD')
                        .setDescription(`<a:RedButton:952118805566472232>You need **"HeadMod"** permissions<a:RedButton:952118805566472232>`)
                }
            } else if (member.roles.cache.has('946065963659448361') || member.roles.cache.has('946065967832772628') || member.roles.cache.has('946065971074969662')) {
                if (message.member.roles.cache.has('854031216487432214') || message.member.permissions.has('ADMINISTRATOR')) {
                    if (!member.roles.cache.has('946044292651167764')) {
                        if (member.roles.cache.has('946044282148642816')) {
                            member.roles.remove('946044282148642816')
                            member.roles.add('946044292651167764')
                            return new MessageEmbed()
                                .setColor('GOLD')
                                .setDescription(`Made <@${memberId}> a Staff`)
                        } else if (member.roles.cache.has('946044288058400838')) {
                            member.roles.remove('946044288058400838')
                            member.roles.add('946044292651167764')
                            return new MessageEmbed()
                                .setColor('GOLD')
                                .setDescription(`Made <@${memberId}> a Staff`)
                        }
                    } else {
                        return new MessageEmbed()
                            .setColor('GOLD')
                            .setDescription(`<a:RedButton:952118805566472232><@${memberId}> already has that role<a:RedButton:952118805566472232>`)
                    }
                } else {
                    return new MessageEmbed()
                        .setColor('GOLD')
                        .setDescription(`<a:RedButton:952118805566472232>You need **"HeadHelper"** permissions<a:RedButton:952118805566472232>`)
                }
            }
        }
        if (action === 'JrStaff' || action === 'jrstaff') {
            if (member.roles.cache.has('946065948299907082') || member.roles.cache.has('946065956378120222') || member.roles.cache.has('946065959997825025')) {
                if (message.member.roles.cache.has('946327095024427048') || message.member.permissions.has('ADMINISTRATOR')) {
                    if (!member.roles.cache.has('946044288058400838')) {
                        if (member.roles.cache.has('946044282148642816')) {
                            member.roles.remove('946044282148642816')
                            member.roles.add('946044288058400838')
                            return new MessageEmbed()
                                .setColor('GOLD')
                                .setDescription(`Made <@${memberId}> a JrStaff`)
                        } else if (member.roles.cache.has('946044292651167764')) {
                            member.roles.remove('946044292651167764')
                            member.roles.add('946044288058400838')
                            return new MessageEmbed()
                                .setColor('GOLD')
                                .setDescription(`Made <@${memberId}> a JrStaff`)
                        }
                    } else {
                        return new MessageEmbed()
                            .setColor('GOLD')
                            .setDescription(`<a:RedButton:952118805566472232><@${memberId}> already has that role<a:RedButton:952118805566472232>`)
                    }
                } else {
                    return new MessageEmbed()
                        .setColor('GOLD')
                        .setDescription(`<a:RedButton:952118805566472232>You need **"HeadMod"** permissions<a:RedButton:952118805566472232>`)
                }
            } else if (member.roles.cache.has('946065963659448361') || member.roles.cache.has('946065967832772628') || member.roles.cache.has('946065971074969662')) {
                if (message.member.roles.cache.has('854031216487432214') || message.member.permissions.has('ADMINISTRATOR')) {
                    if (!member.roles.cache.has('946044288058400838')) {
                        if (member.roles.cache.has('946044282148642816')) {
                            member.roles.remove('946044282148642816')
                            member.roles.add('946044288058400838')
                            return new MessageEmbed()
                                .setColor('GOLD')
                                .setDescription(`Made <@${memberId}> a JrStaff`)
                        } else if (member.roles.cache.has('946044292651167764')) {
                            member.roles.remove('946044292651167764')
                            member.roles.add('946044288058400838')
                            return new MessageEmbed()
                                .setColor('GOLD')
                                .setDescription(`Made <@${memberId}> a JrStaff`)
                        }
                    } else {
                        return new MessageEmbed()
                            .setColor('GOLD')
                            .setDescription(`<a:RedButton:952118805566472232><@${memberId}> already has that role<a:RedButton:952118805566472232>`)
                    }
                } else {
                    return new MessageEmbed()
                        .setColor('GOLD')
                        .setDescription(`<a:RedButton:952118805566472232>You need **"HeadHelper"** permissions<a:RedButton:952118805566472232>`)
                }
            }
        }
        if (action === 'JrHelper' || action === 'jrhelper') {
            if (message.member.roles.cache.has('854031216487432214') || message.member.permissions.has('ADMINISTRATOR')) {
                if (!member.roles.cache.has('946065971074969662')) {
                    if (member.roles.cache.has('946065967832772628') || member.roles.cache.has('946065963659448361')) {
                        member.roles.remove('946065963659448361')
                        member.roles.remove('946065967832772628')
                        member.roles.add('946065971074969662')
                        return new MessageEmbed()
                            .setColor('GOLD')
                            .setDescription(`Made <@${memberId}> a JrHelper`)
                    }
                } else {
                    return new MessageEmbed()
                        .setColor('GOLD')
                        .setDescription(`<a:RedButton:952118805566472232><@${memberId}> already has that role<a:RedButton:952118805566472232>`)
                }
            } else {
                return new MessageEmbed()
                    .setColor('GOLD')
                    .setDescription(`<a:RedButton:952118805566472232>You need **"HeadHelper"** permissions<a:RedButton:952118805566472232>`)
            }
        }
        if (action === 'helper' || action === 'Helper') {
            if (message.member.roles.cache.has('854031216487432214') || message.member.permissions.has('ADMINISTRATOR')) {
                if (!member.roles.cache.has('946065967832772628')) {
                    if (member.roles.cache.has('946065963659448361') || member.roles.cache.has('946065963659448361')) {
                        member.roles.remove('946065963659448361')
                        member.roles.remove('946065971074969662')
                        member.roles.add('946065967832772628')
                        return new MessageEmbed()
                            .setColor('GOLD')
                            .setDescription(`Made <@${memberId}> a Helper`)
                    }
                } else {
                    return new MessageEmbed()
                        .setColor('GOLD')
                        .setDescription(`<a:RedButton:952118805566472232><@${memberId}> already has that role<a:RedButton:952118805566472232>`)
                }
            } else {
                return new MessageEmbed()
                    .setColor('GOLD')
                    .setDescription(`<a:RedButton:952118805566472232>You need **"HeadHelper"** permissions<a:RedButton:952118805566472232>`)
            }
        }
        if (action === 'srhelper' || action === 'SrHelper') {
            if (message.member.roles.cache.has('854031216487432214') || message.member.permissions.has('ADMINISTRATOR')) {
                if (!member.roles.cache.has('946065963659448361')) {
                    if (member.roles.cache.has('946065967832772628') || member.roles.cache.has('946065971074969662')) {
                        member.roles.remove('946065967832772628')
                        member.roles.remove('946065971074969662')
                        member.roles.add('946065963659448361')
                        return new MessageEmbed()
                            .setColor('GOLD')
                            .setDescription(`Made <@${memberId}> a SrHelper`)
                    }
                } else {
                    return new MessageEmbed()
                        .setColor('GOLD')
                        .setDescription(`<a:RedButton:952118805566472232><@${memberId}> already has that role<a:RedButton:952118805566472232>`)
                }
            } else {
                return new MessageEmbed()
                    .setColor('GOLD')
                    .setDescription(`<a:RedButton:952118805566472232>You need **"HeadHelper"** permissions<a:RedButton:952118805566472232>`)
            }
        }
        if (action === 'JrMod' || action === 'jrmod') {
            if (message.member.roles.cache.has('946327095024427048') || message.member.permissions.has('ADMINISTRATOR')) {
                if (!member.roles.cache.has('946065959997825025')) {
                    if (member.roles.cache.has('946065948299907082' || '946065956378120222')) {
                        return new MessageEmbed()
                            .setColor('GOLD')
                            .setDescription('<a:Discord:872387036420648980>First Take Other Roles<a:Discord:872387036420648980>')
                    } else {
                        member.roles.add('946065959997825025')
                        return new MessageEmbed()
                            .setColor('GOLD')
                            .setDescription(`Made <@${memberId}> a JrMod`)
                    }
                } else {
                    return new MessageEmbed()
                        .setColor('GOLD')
                        .setDescription(`<a:RedButton:952118805566472232><@${memberId}> already has that role<a:RedButton:952118805566472232>`)
                }
            } else {
                return new MessageEmbed()
                    .setColor('GOLD')
                    .setDescription(`<a:RedButton:952118805566472232>You need **"HeadMod"** permissions<a:RedButton:952118805566472232>`)
            }
        } else if (action === 'Mod' || action === 'mod') {
            if (message.member.roles.cache.has('946327095024427048') || message.member.permissions.has('ADMINISTRATOR')) {
                if (!member.roles.cache.has('946065956378120222')) {
                    if (member.roles.cache.has('946065959997825025' || '946065948299907082')) {
                        return new MessageEmbed()
                            .setColor('GOLD')
                            .setDescription('<a:Discord:872387036420648980>First Take Other Roles<a:Discord:872387036420648980>')
                    } else {
                        member.roles.add('946065956378120222')
                        return new MessageEmbed()
                            .setColor('GOLD')
                            .setDescription(`Made <@${memberId}> a Mod`)
                    }
                } else {
                    return new MessageEmbed()
                        .setColor('GOLD')
                        .setDescription(`<a:RedButton:952118805566472232><@${memberId}> already has that role<a:RedButton:952118805566472232>`)
                }
            } else {
                return new MessageEmbed()
                    .setColor('GOLD')
                    .setDescription(`<a:RedButton:952118805566472232>You need **"HeadMod"** permissions<a:RedButton:952118805566472232>`)
            }
        } else if (action === 'SrMod' || action === 'srmod') {
            if (message.member.roles.cache.has('946327095024427048') || message.member.permissions.has('ADMINISTRATOR')) {
                if (!member.roles.cache.has('946065948299907082')) {
                    if (member.roles.cache.has('946065956378120222' || '946065959997825025')) {
                        return new MessageEmbed()
                            .setColor('GOLD')
                            .setDescription('<a:Discord:872387036420648980>First Take Other Roles<a:Discord:872387036420648980>')
                    } else {
                        member.roles.add('946065948299907082')
                        return new MessageEmbed()
                            .setColor('GOLD')
                            .setDescription(`Made <@${memberId}> a SrMod`)
                    }
                } else {
                    return new MessageEmbed()
                        .setColor('GOLD')
                        .setDescription(`<a:RedButton:952118805566472232><@${memberId}> already has that role<a:RedButton:952118805566472232>`)
                }
            } else {
                return new MessageEmbed()
                    .setColor('GOLD')
                    .setDescription(`<a:RedButton:952118805566472232>You need **"HeadMod"** permissions<a:RedButton:952118805566472232>`)
            }
        }
        if (action === 'DStreamer' || action === 'dstreamer') {
            if (message.member.roles.cache.has('854031245222871040') || message.member.permissions.has('ADMINISTRATOR')) {
                if (!message.member.roles.cache.has('943171512947589190')) {
                    member.roles.add('943171512947589190')
                    return new MessageEmbed()
                        .setColor('GOLD')
                        .setDescription(`Made <@${memberId}> a Diamond Streamer`)
                } else {
                    return new MessageEmbed()
                        .setColor('GOLD')
                        .setDescription(`<a:RedButton:952118805566472232><@${memberId}> already has that role<a:RedButton:952118805566472232>`)
                }
            } else {
                return new MessageEmbed()
                    .setColor('GOLD')
                    .setDescription(`<a:RedButton:952118805566472232>You need **"HeadMod"** permissions<a:RedButton:952118805566472232>`)
            }
        } else if (action === 'GStreamer' || action === 'gstreamer') {
            if (message.member.roles.cache.has('854031245222871040') || message.member.permissions.has('ADMINISTRATOR')) {
                if (!message.member.roles.cache.has('946446836703567934')) {
                    member.roles.add('946446836703567934')
                    return new MessageEmbed()
                        .setColor('GOLD')
                        .setDescription(`Made <@${memberId}> a Golden Streamer`)
                } else {
                    return new MessageEmbed()
                        .setColor('GOLD')
                        .setDescription(`<a:RedButton:952118805566472232><@${memberId}> already has that role<a:RedButton:952118805566472232>`)
                }
            } else {
                return new MessageEmbed()
                    .setColor('GOLD')
                    .setDescription(`<a:RedButton:952118805566472232>You need **"HeadMod"** permissions<a:RedButton:952118805566472232>`)
            }
        } else if (action === 'Streamer' || action === 'streamer') {
            if (message.member.roles.cache.has('854031245222871040') || message.member.permissions.has('ADMINISTRATOR')) {
                if (!message.member.roles.cache.has('799202925024903185')) {
                    member.roles.add('799202925024903185')
                    return new MessageEmbed()
                        .setColor('GOLD')
                        .setDescription(`Made <@${memberId}> a Streamer`)
                } else {
                    return new MessageEmbed()
                        .setColor('GOLD')
                        .setDescription(`<a:RedButton:952118805566472232><@${memberId}> already has that role<a:RedButton:952118805566472232>`)
                }
            } else {
                return new MessageEmbed()
                    .setColor('GOLD')
                    .setDescription(`<a:RedButton:952118805566472232>You need **"HeadMod"** permissions<a:RedButton:952118805566472232>`)
            }
        } else if (action === 'Media' || action === 'media') {
            if (message.member.roles.cache.has('854031245222871040') || message.member.permissions.has('ADMINISTRATOR')) {
                if (!message.member.roles.cache.has('868117308969738260')) {
                    member.roles.add('868117308969738260')
                    return new MessageEmbed()
                        .setColor('GOLD')
                        .setDescription(`Made <@${memberId}> a Media`)
                } else {
                    return new MessageEmbed()
                        .setColor('GOLD')
                        .setDescription(`<a:RedButton:952118805566472232><@${memberId}> already has that role<a:RedButton:952118805566472232>`)
                }
            } else {
                return new MessageEmbed()
                    .setColor('GOLD')
                    .setDescription(`<a:RedButton:952118805566472232>You need **"HeadMod"** permissions<a:RedButton:952118805566472232>`)
            }
        } else if (action === 'َAparater' || action === 'aparater') {
            if (message.member.roles.cache.has('854031245222871040') || message.member.permissions.has('ADMINISTRATOR')) {
                if (!message.member.roles.cache.has('913800077255016488')) {
                    member.roles.add('913800077255016488')
                    return new MessageEmbed()
                        .setColor('GOLD')
                        .setDescription(`Made <@${memberId}> a Aparater`)
                } else {
                    return new MessageEmbed()
                        .setColor('GOLD')
                        .setDescription(`<a:RedButton:952118805566472232><@${memberId}> already has that role<a:RedButton:952118805566472232>`)
                }
            } else {
                return new MessageEmbed()
                    .setColor('GOLD')
                    .setDescription(`<a:RedButton:952118805566472232>You need **"HeadMod"** permissions<a:RedButton:952118805566472232>`)
            }
        } else if (action === 'Youtuber' || action === 'youtuber') {
            if (message.member.roles.cache.has('854031245222871040') || message.member.permissions.has('ADMINISTRATOR')) {
                if (!message.member.roles.cache.has('850462982697910352')) {
                    member.roles.add('850462982697910352')
                    return new MessageEmbed()
                        .setColor('GOLD')
                        .setDescription(`Made <@${memberId}> a YouTuber`)
                } else {
                    return new MessageEmbed()
                        .setColor('GOLD')
                        .setDescription(`<a:RedButton:952118805566472232><@${memberId}> already has that role<a:RedButton:952118805566472232>`)
                }
            } else {
                return new MessageEmbed()
                    .setColor('GOLD')
                    .setDescription(`<a:RedButton:952118805566472232>You need **"HeadMod"** permissions<a:RedButton:952118805566472232>`)
            }
        }
    }
}