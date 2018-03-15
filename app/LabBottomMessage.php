<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LabBottomMessage extends Model
{
    /**
     * 关联到模型的数据表
     *
     * @var string
     */
    protected $table = 'lab_bottom_messages';
    
    public $timestamps = false;
}
